using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Services;

namespace Client
{
    /// <summary>
    /// Summary description for ConvertNumbersToWordsService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class ConvertNumbersToWordsService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        static class ConvertNumbers
        {
            private static string[] _ones =
            {
                "ZERO",
                "ONE",
                "TWO",
                "THREE",
                "FOUR",
                "FIVE",
                "SIX",
                "SEVEN",
                "EIGHT",
                "NINE"
            };

            private static string[] _teens =
            {
                "TEN",
                "ELEVEN",
                "TWELVE",
                "THIRTEEN",
                "FOURTEEN",
                "FIFTEEN",
                "SIXTEEN",
                "SEVENTEEN",
                "EIGHTEEN",
                "NINETEEN"
            };

            private static string[] _tens =
            {
                "",
                "TEN",
                "TWENTY",
                "THIRTY",
                "FORTY",
                "FIFTY",
                "SIXTY",
                "SEVENTY",
                "EIGHTY",
                "NINETY"
            };

            private static string[] _thousands =
            {
                "",
                "THOUSAND",
                "MILLION",
                "BILLION",
                "TRILLION",
                "QUADRALLION"
            };

            /// <summary>
            /// Converts digits in the decimal numeric value to words
            /// </summary>
            /// <param name="value">Value to be converted in to words</param>
            /// <returns>A string of words equivalent for decimal numeric value</returns>
            public static string ToWords(long value)
            {
                string digits, temp;
                bool showThousands = false;
                bool allZeros = true;

                
                StringBuilder builder = new StringBuilder();
                
                // Convert integer portion of value to string
                digits = ((long)value).ToString();

                // Traverse digit character in the strin in the reverse order
                for (int i = digits.Length - 1; i >= 0; i--)
                {
                    int ndigit = (int)(digits[i] - '0');
                    int column = (digits.Length - (i + 1));

                    // Need to find if it ONES, TENS, or HUNDREDS column
                    switch (column % 3)
                    {
                        case 0:  // ONES position
                            showThousands = true;
                            if (i == 0)
                            {
                                // First digit in number (last in loop)
                                temp = String.Format("{0} ", _ones[ndigit]);
                            }
                            else if (digits[i - 1] == '1')
                            {
                                // This digit is part of "teen" value
                                temp = String.Format("{0} ", _teens[ndigit]);
                                // Skip tens position
                                i--;
                            }
                            else if (ndigit != 0)
                            {
                                // Any non-zero digit
                                temp = String.Format("{0} ", _ones[ndigit]);
                            }
                            else
                            {
                                // This digit is zero. If digit in tens and hundreds
                                // column are also zero, don't show "thousands"
                                temp = String.Empty;
                                // Test for non-zero digit in this grouping
                                if (digits[i - 1] != '0' || (i > 1 && digits[i - 2] != '0'))
                                    showThousands = true;
                                else
                                    showThousands = false;
                            }

                            // Show "THOUSANDS" if non-zero in grouping
                            if (showThousands)
                            {
                                if (column > 0)
                                {
                                    temp = String.Format("{0}{1}{2}",
                                        temp,
                                        _thousands[column / 3],
                                        allZeros ? " " : ", ");
                                }
                                // Indicate non-zero digit encountered
                                allZeros = false;
                            }
                            builder.Insert(0, temp);
                            break;

                        case 1:        // Tens column
                            if (ndigit > 0)
                            {
                                temp = String.Format("{0}{1}",
                                    _tens[ndigit],
                                    (digits[i + 1] != '0') ? "-" : " ");
                                builder.Insert(0, temp);
                            }
                            break;

                        case 2:   // Hundreds column
                            if (ndigit > 0)
                            {
                                temp = String.Format("{0} HUNDRED ", _ones[ndigit]);
                                builder.Insert(0, temp);
                            }
                            break;
                    }
                }

                return String.Format("{0}{1}",
                    (builder[0]),
                    builder.ToString(1, builder.Length - 1));
            }
        }

        [WebMethod]
        public string ConvertNumbersToWords(decimal numberValue)
        {
            string[] strNUmber = numberValue.ToString().Split('.');
            string returnString = "";
            long lngDollers = 0;
            long lngcents = 0;
            if (strNUmber.Length > 1)
            {
                lngDollers = Convert.ToInt64(strNUmber[0]);
                lngcents = Convert.ToInt32(strNUmber[1]);
            }
            else if (strNUmber.Length > 0)
            {
                lngDollers = Convert.ToInt64(strNUmber[0]);
            }
            if (lngcents.ToString().Length == 1)
            {
                if (lngcents > 10)
                    lngcents = lngcents * 10;
            }
            returnString = ConvertNumbers.ToWords(lngDollers); ;
            returnString = returnString + " DOLLARS ";
            if(lngcents>0)
            {
                string strCents = strNUmber[1];
                if (strCents[0] == '0')
                {
                    returnString = returnString + " " + "ZERO " + ConvertNumbers.ToWords(lngcents) + " CENTS ";
                }
                else
                    returnString = returnString +" "+ ConvertNumbers.ToWords(lngcents) + " CENTS ";
            }

            return returnString;
        }
    }
}
