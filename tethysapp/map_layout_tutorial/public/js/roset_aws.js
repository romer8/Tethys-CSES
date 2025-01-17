// The following function are copying from 
// https://docs.djangoproject.com/en/dev/ref/csrf/#ajax
function getCookie(name) {
   var cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       var cookies = document.cookie.split(';');
       for (var i = 0; i < cookies.length; i++) {
           var cookie = cookies[i].trim();
           // Does this cookie string begin with the name we want?
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}
let csrftoken = getCookie('csrftoken');



fetch(".", {
    method: 'POST',
    headers: {
       "Content-Type": "application/x-www-form-urlencoded",
       "X-CSRFToken": csrftoken 
    },
    body:
       'method=test_rest_api&other=1'
}).then((response) => response.json()).then((data) => {
 // Do something magical with your data :)
});s