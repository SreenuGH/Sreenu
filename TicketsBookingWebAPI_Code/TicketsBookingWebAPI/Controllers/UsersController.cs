using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UsersDataAccess;

namespace TicketsBookingWebAPI.Controllers
{
    public class UsersController : ApiController
    {
        public IEnumerable<User> Get()
        {
            using (FlightsBookingInfoDatabaseEntities1 entities=new FlightsBookingInfoDatabaseEntities1())
            {
                return entities.Users.ToList();
            }
        }

            public HttpResponseMessage Get(int id)
            {
                using (FlightsBookingInfoDatabaseEntities1 entities = new FlightsBookingInfoDatabaseEntities1())
                {
                     var entity= entities.Users.FirstOrDefault(e => e.id == id);
                    if (entity !=null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK,entity);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound,"Employee with Id" + id.ToString() + "not found" );
                    }
                
                }
            }

            public HttpResponseMessage Post([FromBody] User user)
            {
                try
                {
                    using(FlightsBookingInfoDatabaseEntities1 entities=new FlightsBookingInfoDatabaseEntities1())
                    {
                        entities.Users.Add(user);
                        entities.SaveChanges();
                        var message = Request.CreateResponse(HttpStatusCode.Created, user);
                        message.Headers.Location = new Uri(Request.RequestUri + user.id.ToString());
                        return message;
                    }
                }
                catch(Exception ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest,ex);
                }
            }

            public HttpResponseMessage Delete(int id)
            {
                try
                {
                    using (FlightsBookingInfoDatabaseEntities1 entities = new FlightsBookingInfoDatabaseEntities1())
                    {
                        var entity = entities.Users.FirstOrDefault(e => e.id == id);
                        if (entity == null)
                        {
                            return Request.CreateResponse(HttpStatusCode.OK, entity);
                        }
                        else
                        {
                            entities.Users.Remove(entity);
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

        public HttpResponseMessage Put(int id,[FromBody] User user)
        {
            try
            {

                using (FlightsBookingInfoDatabaseEntities1 entities = new FlightsBookingInfoDatabaseEntities1())
                {
                    var entity = entities.Users.FirstOrDefault(e => e.id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with Id" + id.ToString() + "not found");
                    }
                    else
                    {
                        entity.id = user.id;
                        entity.fullName = user.fullName;
                        entity.gender = user.gender;
                        entity.contactPreference = user.contactPreference;
                        entity.email = user.email;
                        entity.phoneNumber = user.phoneNumber;
                        entity.dateOfBirth = user.dateOfBirth;
                        entity.department = user.department;
                        entity.isActive = user.isActive;
                        entity.photoPath = user.photoPath;
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK,entity);
                    }
                }
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest,ex);
            }
        }
    }
}
