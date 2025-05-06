import express, { request } from 'express'
import { Liquid } from 'liquidjs';


const taskResponse = await fetch('https://fdnd-agency.directus.app/items/dropandheal_task/')            // Je haalt de API op
const excerciseResponse = await fetch('https://fdnd-agency.directus.app/items/dropandheal_exercise')    // Je haalt de API op
const messageResponse = await fetch('https://fdnd-agency.directus.app/items/dropandheal_messages')

const taskResponseJSON = await taskResponse.json()                                                      // Je zet de data om in JSON
const excerciseResponseJSON = await excerciseResponse.json()                                            // Je zet de data om in JSON
const messageResponseJSON = await messageResponse.json()


const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 


app.set('views', './views')

app.get('/', async function (request, response) {               // Je haalt de root op
   response.render('index.liquid', {task: taskResponseJSON.data })  
})

app.get('/task/:id', async function (request, response) {       // Je haalt de id op die uit de filter (<a> van task.lquid) komt. 
  const task = request.params.id;                               // Je maakt een variabele aan voor de opgevraagde id
  const taskResponse = await fetch(`https://fdnd-agency.directus.app/items/dropandheal_task/?fields=*.*.*&filter={"id":"${task}"}&limit=1`) // De variable kan je in de link terug laten komen + door de fields komen taken en opdrachten samen in een API.
  const taskResponseJSON = await taskResponse.json()            // Je zet de data om in JSON

  response.render('task.liquid', {task: taskResponseJSON.data?.[0] || [] }) 
})


app.get('/exercise/:id', async function (request, response) {
  const exercise = request.params.id;
  const exerciseResponse = await fetch(`https://fdnd-agency.directus.app/items/dropandheal_exercise/?fields=*.*&filter={"id":"${exercise}"}&limit=1`)
  const exerciseResponseJSON = await exerciseResponse.json()

  const messagesResponse = await fetch(`https://fdnd-agency.directus.app/items/dropandheal_messages?filter={"_and":[{"exercise":{"_eq":"${request.params.id}"}},{"from":{"_contains":"Jules_"}}]}`)
  const messagesResponseJSON = await messagesResponse.json()

  response.render('exercise.liquid', {exercise: exerciseResponseJSON.data?.[0] || [], messagesLength: messagesResponseJSON.data.length })
})


app.get('/post-page/:id', async function (request, response) {
  const postResponse = await fetch(`https://fdnd-agency.directus.app/items/dropandheal_messages?filter={"_and":[{"exercise":{"_eq":"${request.params.id}"}},{"from":{"_contains":"Jules_"}}]}`)
  const postResponseJSON = await postResponse.json()
  
  response.render('post-page.liquid', { id: request.params.id, messages: postResponseJSON.data, succes_message: request.query.succes })
})


app.get('/community-drops/:id', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd-agency.directus.app/items/dropandheal_messages?filter={"_and":[{"exercise":{"_eq":"${request.params.id}"}},{"from":{"_contains":"Jules_"}}]}&sort=-created`)
  const messagesResponseJSON = await messagesResponse.json()


  response.render('community-drops.liquid', { id: request.params.id, messages: messagesResponseJSON.data, succes_message: request.query.succes })
})


app.post('/community-drop/:id', async function (request, response) {
  console.log("post-route")
  await fetch('https://fdnd-agency.directus.app/items/dropandheal_messages', {      // Je stuurt de message naar deze API
    method: 'POST',                                                                 // Je gebruikt de POST methode
    body: JSON.stringify({
      from: `Jules_${request.body.name}`,                                           // Ik gebruikt uit database from, exercise & text (Jules_ zorgt ervoor dat alleen mijn messages gebruikt worden)
      exercise: request.params.id,                                                  // exercise zorgt ervoor dat bij juiste opdracht bijbehorende drops komen dmv request.params.id
      text: request.body.community_drop                                             // text zorgt ervoor dat in het 'text' veld in database de geposte content komt
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  response.redirect(303, `/community-drops/${request.params.id}/?succes=Toegevoegd aan drops`)         // zorgt ervoor dat je na de post succesvol doorgelijdt wordt naar de pagina waar de berichten voor die specifieke opdracht worden weergegeven.
})  


app.set('port', process.env.PORT || 8000)


app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

app.use((request, respond, next) => {
  respond.render('404.liquid')
})


