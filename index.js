const axios= require('axios');
const cheerio= require('cheerio');
const URL = 'http://originbooks.herokuapp.com/';

axios.get(URL)
    .then(response => {
        const $= cheerio.load(response.data);
        const Stuff = [];

        $('div.panel-default').each((i,tag)=>{
            Stuff.push({
                title: tag.children[1].children[0].data.trim(),
                image: tag.children[3].children[1].attribs.src.trim(),
                author: tag.children[3].children[3].children[0].data.trim(),
                price: tag.children[3].children[5].children[0].data.trim()
            });
        });

        console.log(Stuff);
    })

   