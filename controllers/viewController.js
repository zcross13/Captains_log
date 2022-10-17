//create an object that has index key, show key etc. the purpose is to render our views. 


const RESOURCE_PATH = '/logs'
//true const is a const that you dont ever want to change. Place is in all caps 

//object literal - we make the object 
const viewController = {
    index(req,res,next){
        res.render('logs/Index', res.locals.data)
    },
    newView(req,res,next){
        res.render('logs/New')
    }, 
    edit(req, res, next){
        res.render('logs/Edit', res.locals.data)
    }, 
    show(req,res,next){
        res.render('logs/Show', res.locals.data)
    }, 
    redirectHome(req,res,next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req,res,next){
        res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    }
}

module.exports = viewController