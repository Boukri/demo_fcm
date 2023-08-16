using Newtonsoft.Json;
using System.Text.Json;

namespace DemoFcm
{
    public class NotificationModel
    {
        public NotificationModel(List<string> registrationIds, NotificationInfo notification)
        {
            RegistrationIds = registrationIds;
            Notification = notification;
        }

        [JsonProperty("registration_ids")]
        public List<string> RegistrationIds { get; set; }
        [JsonProperty("notification")]
        public NotificationInfo Notification { get; set; }
    }
    public class NotificationInfo
    {
        public NotificationInfo(string title, string content)
        {
            Title = title;
            Content = content;
        }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("body")]
        public string Content { get; set; }
    }
}
