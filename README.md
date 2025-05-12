
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar je live site 🌐-->
[Bekijk hier zelf de site!](https://user-experience-enhanced-website-pvnn.onrender.com/)

Wat al stond was een website met verschillende rouwtaken, opdrachten en commmunity drops. Ook kon je al zelf een community drop achterlaten doormiddel van een post via de server en browser. Afgelopen weken hebben we gewerkt aan peformance. Hoe snel een website laadt bijvoorbeeld. Ook kwam hierbij progressive enhancement aan de orde. Dit houdt in dat je ervoor zorgt dat een website werkt voor iedereen. Denk hierbij bijvoorbeeld aan mensen die het gebruik van animaties uitzetten. Tot slot hebben we gewerkt met client side scripting. Je neemt zelf controle over de (in dit geval) de POST.



https://github.com/user-attachments/assets/8d8e5fdd-f368-4928-a2d6-803528ae4895



## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
Als gebruiker van drop en heal wil ik ervaringen met de opdrachten van anderen kunnen lezen en zelf een ervaring delen, zodat je weet dat je niet alleen bent en wil hierbij optimale performance. Het werkt als volgt. Je klikt op de link naar community drop, hier kan je eerst de community drops lezen die al gedeeld (gepost) zijn. Vervolgens klik je op 'plaats bericht' waarnaar op dezelfde pagina een formulier zichtbaar wordt waar je je eigen ervaring kan schrijven en achterlaten. Wanneer een drop geplaatst wordt en er wordt geklikt op 'plaats bericht' zie je een laad icoon tevoorschijn komen en wanneer de comment geplaatst is komt er boven in je scherm een melding in beeld met een bevestiging. Onderaan vind je dan de nieuwe geplaatste comment en dit gebeurt allemaal zonder dat de pagina opnieuw gerefresht wordt. 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
De kenmerken zijn de volgende en hebben veelal te maken met peformance:
* **loading state:** In de Javascript wordt na het submitten van het bericht een [loading state](https://github.com/julesbruins/user-experience-enhanced-website/blob/af91d9340b748b1e7ec56ffdc6d4bbd11dc6421c/public/scripteen.js#L37-L39) geactiveerd. Er komt een laad icoon tevoorschijn.
* **succes state:** In de Javascript wordt ook na het toevoegen van een nieuwe drop een [succes state](https://github.com/julesbruins/user-experience-enhanced-website/blob/af91d9340b748b1e7ec56ffdc6d4bbd11dc6421c/public/scripteen.js#L67-L72) laten zien. Je krijgt een melding dat aangeeft dat de drop is toegeovegd.
* **client side fetch:** Er wordt verder nog gebruik gemaakt van een [client side fetch](https://github.com/julesbruins/user-experience-enhanced-website/blob/af91d9340b748b1e7ec56ffdc6d4bbd11dc6421c/public/scripteen.js#L29-L73). Dit houdt in dat je zelf controle neemt over wat er gebeurt in een POST en dat de pagina niet herlaadt. Dit gebeurt ook doormiddel van code in de Javascript.
* **progressive enhancement:** De progressive enhancement die hier van toepassing is op het formulier werkt als volgt. Helemaal enhanced wordt er gebruik gemaakt van [Javascript](https://github.com/julesbruins/user-experience-enhanced-website/blob/af91d9340b748b1e7ec56ffdc6d4bbd11dc6421c/public/scripteen.js#L2-L12) dat ervoor zorgt dat het formulier pas zichtbaar wordt na het klikken op 'plaats bericht'. Wanneer [Javascript door een gebruiker uitgeschakeld](https://github.com/julesbruins/user-experience-enhanced-website/blob/af91d9340b748b1e7ec56ffdc6d4bbd11dc6421c/public/styles/community-drops.css#L1C1-L5C2) is werkt het anders. Waneer je dan klikt op 'plaats bericht' dan staat het formulier onderaan de pagina en wordt je op de pagina doorgelink met een vloeiende scroll. Wanneer ook [animaties uit](https://github.com/julesbruins/user-experience-enhanced-website/blob/af91d9340b748b1e7ec56ffdc6d4bbd11dc6421c/views/community-drops.liquid#L37-L48) zijn, 'schiet' je als het ware naar het formulier toe onderaan de pagina, maar is gebruik van het formulier nog steeds mogelijk. 
* **layout shifts:** We hebben ook nog gewerkt aan layout shifts. Hierbij ga je het probleem tegen dat als content nadat de pagina geladen en gerenderd is opeens verspringt. Hoe dit opgelost is kan je het best [hier teruglezen](https://github.com/julesbruins/user-experience-enhanced-website/issues/8).
* responsive images: Tot slot heb ik [repsonsive images](https://github.com/julesbruins/user-experience-enhanced-website/blob/6f1385141bca73a9f492ee3eddda8cf9a5aa80b3/views/task.liquid#L44-L48) toegepast. Responsive images helpen de browser om het beste plaatje te kiezen voor de eindgebruiker. Daarmee houdt de browser rekening met de internet snelheid, het device en de grootte van het scherm.

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
In dit project wordt gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmaal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle afhankelijkheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar http://localhost:8000 om het project te bekijken.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
