using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserDataModel;

namespace FlightTicketBookingWebAPI.Controllers
{
    public class flightsController : ApiController
    {
        public IEnumerable<flight> Get()
        {
            using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
            {
                return entities.flights.ToList();
            }
        }

        public HttpResponseMessage Get(int id)
        {
            using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
            {
                var entity = entities.flights.FirstOrDefault(e => e.id == id);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Flight with Id" + id.ToString() + "not found");
                }

            }
        }

        public HttpResponseMessage Post([FromBody] flight flightObj)
        {
            try
            {
                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    entities.flights.Add(flightObj);
                    entities.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, flightObj);
                    message.Headers.Location = new Uri(Request.RequestUri + flightObj.id.ToString());
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
                    var entity = entities.flights.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }
                    else
                    {
                        entities.flights.Remove(entity);
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

        public HttpResponseMessage Put(int id, [FromBody] flight flightObj)
        {
            try
            {

                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    var entity = entities.flights.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Flight with Id" + id.ToString() + "not found");
                    }
                    else
                    {
                        entity.id = flightObj.id;
                        entity.fullName = flightObj.fullName;
                        entity.startTime = flightObj.startTime;
                        entity.endTime = flightObj.endTime;
                        entity.passengerCapacity = flightObj.passengerCapacity;
                        entity.departureCity = flightObj.departureCity;
                        entity.arrivalCity = flightObj.arrivalCity;
                        entity.photoPath = flightObj.photoPath;
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
