console.log("Hello World!!")

function openTab()
{
    // page = window.open('https://www.google.com/',"_blank","width=786, height=786")
    page = window.open('',"_blank","width=786, height=786")
    page.document.write("<h2>I am the opened tab</h2>")
}

function closeTab()
{
    page.close()
}