console.log("hello deno");

const data = new TextEncoder().encode("Hello deno");

Deno.writeFileSync("hello.txt", data);