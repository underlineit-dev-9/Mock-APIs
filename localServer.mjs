import express from 'express';
// import cors from 'cors'

const app = express();
// const cors = require('cors');
const port = 3003;
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://example.com']
// }));
const data = 
  {
    "events": [
      {
        "title": "Pavan kalyannn Playing badmintun",
        "eventDescription": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "posterPath": "https://events.telugupaluku.net/wp-content/uploads/2023/02/lanasena-Formation-Day-Celebrations.jpg",
        "eventDate": "25/5/2022",
        "promotionDate": "5/5/2023",
        "registrationDate": "19/5/2023",
        "registrationClosingDate": "23/5/2023",
        "noOfSeatsPerUser": 7,
        "seatsCapacity": 81,
        "address": {
          "address1": "3121 Forest Dale Alley",
          "address2": "PO Box 34549",
          "state": "New South Wales",
          "country": "Australia",
          "postalCode": "1033",
          "geoLocation": { "lat": -10.1269585, "long": -63.8640569 }
        },
        "tags": [
          "tag1",
          "tag2",
          "tag3",
          "tag4"
        ],
        "eventStatus": [
          "Pending",
          "Postponed",
          "Completed",
          "Cancelled"
        ],
        "eventType": [
          {
            "paid": {
              "fee": 100,
              "currency": "$"
            }
          },
          {
            "free": {
              "fee": 0
            }
          }
        ],
        "extraDetails": [
          {
            "question1": ""
          },
          {
            "question2": ""
          },
          {
            "question3": ""
          },
          {
            "question4": ""
          },
          {
            "question5": ""
          }
        ],
        "id": 1
      },
      {
        "id": 2,
        "title": "Drifting Clouds (Kauas pilvet karkaavat)",
        "eventDescription": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "posterPath": "https://events.telugupaluku.net/wp-content/uploads/2023/01/Avadhaanam-Flyer-2023.png",
        "eventDate": "15/6/2022",
        "promotionDate": "7/6/2023",
        "registrationDate": "8/6/2023",
        "registrationClosingDate": "13/6/2023",
        "noOfSeatsPerUser": 7,
        "seatsCapacity": 81,
        "address": {
          "address1": "55 Florence Alley",
          "address2": "Apt 1128",
          "state": "New South Wales",
          "country": "Australia",
          "postalCode": "1191",
          "geoLocation": { "lat": 59.2830988, "long": 18.033347 }
        },
        "tags": [
          "tag1",
          "tag2",
          "tag3",
          "tag4"
        ],
        "eventStatus": [
          "Pending",
          "Postponed",
          "Completed",
          "Cancelled"
        ],
        "eventType": [
          {
            "paid": {
              "fee": 100,
              "currency": "$"
            }
          },
          {
            "free": {
              "fee": 0
            }
          }
        ],
        "extraDetails": [
          {
            "question1": ""
          },
          {
            "question2": ""
          },
          {
            "question3": ""
          },
          {
            "question4": ""
          },
          {
            "question5": ""
          }
        ]
      },
      {
        "id": 3,
        "title": "Amityville: A New Generation",
        "eventDescription": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "posterPath": "https://events.telugupaluku.net/wp-content/uploads/2023/01/KALYANAM.jpg",
        "eventDate": "6/1/2022",
        "promotionDate": "1/24/2023",
        "registrationDate": "1/27/2023",
        "registrationClosingDate": "1/30/2023",
        "noOfSeatsPerUser": 9,
        "seatsCapacity": 70,
        "address": {
          "address1": "2 Boyd Parkway",
          "address2": "PO Box 97714",
          "state": "New South Wales",
          "country": "Australia",
          "postalCode": "1130",
          "geoLocation": { "lat": 14.5919106, "long": 121.0228804 }
        },
        "tags": [
          "tag1",
          "tag2",
          "tag3",
          "tag4"
        ],
        "eventStatus": [
          "Pending",
          "Postponed",
          "Completed",
          "Cancelled"
        ],
        "eventType": [
          {
            "paid": {
              "fee": 100,
              "currency": "$"
            }
          },
          {
            "free": {
              "fee": 0
            }
          }
        ],
        "extraDetails": [
          {
            "question1": ""
          },
          {
            "question2": ""
          },
          {
            "question3": ""
          },
          {
            "question4": ""
          },
          {
            "question5": ""
          }
        ]
  
      },
      {
        "id": 4,
        "title": "Comes a Horseman",
        "eventDescription": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "posterPath": "https://events.telugupaluku.net/wp-content/uploads/2023/01/fitnes.jpg",
        "eventDate": "11/30/2022",
        "promotionDate": "1/25/2023",
        "registrationDate": "1/28/2023",
        "registrationClosingDate": "1/30/2023",
        "noOfSeatsPerUser": 10,
        "seatsCapacity": 75,
        "address": {
          "address1": "598 Lukken Hill",
          "address2": "16th Floor",
          "state": "South Australia",
          "country": "Australia",
          "postalCode": "5899",
          "geoLocation": { "lat": 28.871569, "long": 105.44174 }
        },
        "tags": [
          "tag1",
          "tag2",
          "tag3",
          "tag4"
        ],
        "eventStatus": [
          "Pending",
          "Postponed",
          "Completed",
          "Cancelled"
        ],
        "eventType": [
          {
            "paid": {
              "fee": 100,
              "currency": "$"
            }
          },
          {
            "free": {
              "fee": 0
            }
          }
        ],
        "extraDetails": [
          {
            "question1": ""
          },
          {
            "question2": ""
          },
          {
            "question3": ""
          },
          {
            "question4": ""
          },
          {
            "question5": ""
          }
        ]
      },
      {
        "id": 5,
        "title": "Redbelt",
        "eventDescription": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "posterPath": "https://events.telugupaluku.net/wp-content/uploads/2023/01/%E0%B0%A4%E0%B1%86%E0%B0%B2%E0%B1%81%E0%B0%97%E0%B1%81%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B0%82-%E0%B0%86%E0%B0%B8%E0%B1%8D%E0%B0%9F%E0%B1%8D%E0%B0%B0%E0%B1%87%E0%B0%B2%E0%B0%BF%E0%B0%AF%E0%B0%BE-%E0%B0%B8%E0%B0%82%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B0%BE%E0%B0%82%E0%B0%A4%E0%B0%BF-%E0%B0%B8%E0%B0%82%E0%B0%AC%E0%B0%B0%E0%B0%BE%E0%B0%B2%E0%B1%81-2023.jpg",
        "eventDate": "1/25/2023",
        "promotionDate": "1/27/2023",
        "registrationDate": "1/28/2023",
        "registrationClosingDate": "1/30/2023",
        "noOfSeatsPerUser": 5,
        "seatsCapacity": 92,
        "address": {
          "address1": "1913 Forest Dale Avenue",
          "address2": "Room 296",
          "state": "Western Australia",
          "country": "Australia",
          "postalCode": "6843",
          "geoLocation": { "lat": 45.347492, "long": 130.642301 }
        },
        "tags": [
          "tag1",
          "tag2",
          "tag3",
          "tag4"
        ],
        "eventStatus": [
          "Pending",
          "Postponed",
          "Completed",
          "Cancelled"
        ],
        "eventType": [
          {
            "paid": {
              "fee": 100,
              "currency": "$"
            }
          },
          {
            "free": {
              "fee": 0
            }
          }
        ],
        "extraDetails": [
          {
            "question1": ""
          },
          {
            "question2": ""
          },
          {
            "question3": ""
          },
          {
            "question4": ""
          },
          {
            "question5": ""
          }
        ]
      }
    ]
  
};



app.get('/data.json', (req, res) => {
  res.json(data);
});

app.get('/events', (req, res) => {
  res.send(data.events);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});