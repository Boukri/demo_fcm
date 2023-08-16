using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using System.Net.Http.Headers;
using System.Text;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Reflection.PortableExecutable;

namespace DemoFcm.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PushNotificationController : ControllerBase
    {
        [HttpPost("usertoken:string")]
        [OpenApiOperation("push notification.", "")]
        public async Task<string> PushAsync(string usertoken)
        {
            string result;
            var url = $"https://fcm.googleapis.com/fcm/send";
            using (var httpClient = new HttpClient())
            {
                var notification = new NotificationModel(registrationIds: new List<string>(){ usertoken }, new NotificationInfo(
                    title:"Ilan26",
                    content:"welcome to ilan26"
                    ));
                var dataString = JsonConvert.SerializeObject(notification);
                httpClient.BaseAddress = new Uri(url);

                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", $"key=AAAASaNNFd4:APA91bE6vfFEFNo2DTt3WORVDIJpFTaK2ialibInEXAk040XgZ4JVlhhSx0SP8cVFCnCgc83CyOAy4Z4Y0LtgwLl72qQZqJpTvj7zAtLtN-EJUuGmJt51FnKK-FFR2EHmwo_-t0tEgCm"); 
                using (var response =
                    await httpClient.PostAsync(url, new StringContent(dataString, Encoding.UTF8, "application/json")))
                {
                    using (var content = response.Content)
                    {
                          result = await content.ReadAsStringAsync();
                    }
                }
            };
            return result;
        }
    }
}
