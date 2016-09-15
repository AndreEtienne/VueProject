var ghpages = require('gh-pages')
var path = require('path')
var repo = 'git@github.com:AndreEtienne/VueProject.git'
var dist = path.join(__dirname, '../dist')

ghpages.publish(dist,  {
    repo: repo,
    branch: 'gh-pages',
    user: {
      name: 'Andre Etienne',
      email: 'andreetienne1987@gmial.com'
    }
},function(err){
    if(err)
        console.error('ghpages failed', err)
    else
        console.log('ghpages successfully deployed')
})
