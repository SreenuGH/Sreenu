using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserDataModel;

namespace FlightTicketBookingWebAPI.Controllers
{
    public class UserdetailsController : ApiController
    {
        public IEnumerable<Userdetail> Get()
        {
            using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
            {
                return entities.Userdetails.ToList();
            }
        }

        public HttpResponseMessage Get(int id)
        {
            using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
            {
                var entity = entities.Userdetails.FirstOrDefault(e => e.id == id);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "User with Id" + id.ToString() + "not found");
                }

            }
        }

        public HttpResponseMessage Post([FromBody] Userdetail user)
        {
            try
            {
                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    entities.Userdetails.Add(user);
                    entities.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, user);
                    message.Headers.Location = new Uri(Request.RequestUri + user.id.ToString());
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
                    var entity = entities.Userdetails.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }
                    else
                    {
                        entities.Userdetails.Remove(entity);
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

        public HttpResponseMessage Put(int id, [FromBody] Userdetail user)
        {
            try
            {

                using (FlightsBookingInfoDatabaseEntities entities = new FlightsBookingInfoDatabaseEntities())
                {
                    var entity = entities.Userdetails.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with Id" + id.ToString() + "not found");
                    }
                    else
                    {
                        entity.id = user.id;
                        entity.fullName = user.fullName;
                        entity.gender = user.gender;
                        entity.email = user.email;
                        entity.phoneNumber = user.phoneNumber;
                        entity.dateOfBirth = user.dateOfBirth;
                        entity.roleType = user.roleType;
                        entity.userName = user.userName;
                        entity.passowrd = user.passowrd;
                        entity.isActive = user.isActive;
                        entity.photoPath = user.photoPath;
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
