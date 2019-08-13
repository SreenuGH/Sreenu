using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserDataModel;

namespace FlightTicketBookingWebAPI.Controllers
{
    public class ticketsController : ApiController
    {
        public IEnumerable<ticket> Get()
        {
            using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
            {
                return entities.tickets.ToList();
            }
        }

        public HttpResponseMessage Get(int id)
        {
            using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
            {
                var entity = entities.tickets.FirstOrDefault(e => e.id == id);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Ticket with Id" + id.ToString() + "not found");
                }

            }
        }

        public HttpResponseMessage Post([FromBody] ticket ticketObj)
        {
            try
            {
                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    entities.tickets.Add(ticketObj);
                    entities.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, ticketObj);
                    message.Headers.Location = new Uri(Request.RequestUri + ticketObj.id.ToString());
                    return message;
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public HttpResponseMessage Delete(int id)
        {
            try
            {
                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    var entity = entities.tickets.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }
                    else
                    {
                        entities.tickets.Remove(entity);
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public HttpResponseMessage Put(int id, [FromBody] ticket ticketObj)
        {
            try
            {

                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    var entity = entities.tickets.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Ticket with Id" + id.ToString() + "not found");
                    }
                    else
                    {
                        entity.id = ticketObj.id;
                        entity.fullName = ticketObj.fullName;
                        entity.passportId = ticketObj.passportId;
                        entity.airlinesName = ticketObj.airlinesName;
                        entity.departureCity = ticketObj.departureCity;
                        entity.arrivalCity = ticketObj.arrivalCity;
                        entity.price = ticketObj.price;
                        entity.gender = ticketObj.gender;
                        entity.email = ticketObj.email;
                        entity.phoneNumber = ticketObj.phoneNumber;
                        entity.dateOfBirth = ticketObj.dateOfBirth;
                        entity.photoPath = ticketObj.photoPath;
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}
