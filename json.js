const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
  JSON.parse(jsonText);
  //outcome: 
// {browsers: {…}}browsers: firefox: {name: 'Firefox', pref_url: 'about:config', releases: {…}}[[Prototype]]: Object
  //JS OBJECT
  const dog = {breed:'lab',color:'brown',isAlive:true,age:undefined}
  //JS object to JSON
JSON.stringify(dog)
// outcome :'{"breed":"lab","color":"brown","isAlive":true}'
  