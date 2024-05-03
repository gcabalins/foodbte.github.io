const res = await fetch("https://es.libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "hello",
		source: "auto",
		target: "es",
		format: "text",
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(res);
