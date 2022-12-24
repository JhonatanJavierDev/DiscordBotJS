//Aqui llamamos a discord.js
const Discord = require('discord.js');

//Esto es una instancia para el bot
const client = new Discord.Client();

//Aqui tienes 10 comandos basicos, de respuestas, que puedes tomar como ejemplo
client.on('message', message => {
	if (message.content === '!saludo') {
		message.reply('Hola amig@');
	}
	if (message.content === '!despedida') {
		message.reply('Adiós amig@');
	}
	if (message.content === '!ayuda') {
		message.reply('¿En qué puedo ayudarte? Puedes usar los comandos !saludo, !despedida, !abrazo, !broma, !noticia, !encuesta, !clima, !pregunta, !video o !gif');
	}
	if (message.content === '!abrazo') {
		message.reply('¡Un abrazo virtual para ti!');
	}
	if (message.content === '!broma') {
		message.reply('¿Por qué los peces tienen tanta memoria? Porque siempre están contando historias de viejas aguas.');
	}
	if (message.content === '!noticia') {
		message.reply('¡Un buen día para la ciencia! Los científicos han descubierto una nueva especie de araña.');
	}
	if (message.content === '!encuesta') {
		message.reply('¿Estás contento con el servicio de Discord? Por favor, responde con un sí o un no.');
	}
	if (message.content === '!clima') {
		message.reply('El clima hoy en tu ciudad es de 25°C con una ligera brisa.');
	}
	if (message.content === '!pregunta') {
		message.reply('¿Cuál es tu animal favorito?');
	}
	if (message.content === '!video') {
		message.reply('¡Aquí tienes un video interesante! https://www.youtube.com/watch?v=dQw4w9WgXcQ');
	}
	if (message.content === '!gif') {
		message.reply('¡Aquí tienes un divertido gif! https://giphy.com/gifs/cat-funny-lol-YFzJkQj1KHvIE');
	}
});

//Por último, usamos el token del bot para iniciar la conexión. Este  token lo obtenemos en la pagina de discord developers
client.login('Aquí va tu token');
