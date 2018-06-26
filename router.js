var express = require('express');
var secureRouter = express.Router();
var _router = require('./router-funciones');
var rutas = require('./router.json');
var api =   process.env.api  //require('./api.json');

secureRouter.post(rutas[0].ruta,(req,res,next)=>{
    /**
     * Método sirve de router a la aplicación
     * @param peticion
     */ 

    try{

        let data = req.body.data;
        let peticion = data.peticion;

        console.log({peticion:peticion});

        if(peticion.m=='POST'){
            let args={
                form: { data: peticion } 
            }
            _router.api.post({url:api+'/'+peticion.uu+'/'+peticion.u,args:args}).then((api)=>{
                if(api.err==null){
                    _router.api.sendProd({ req: req, res: res, code: 200, respuesta: api.body });
                }else{
                    _router.api.sendProd({ req: req, res: res, code: 500, respuesta: null });
                }
            })
        }

        

    }catch(e){
        _router.api.sendProd({ req: req, res: res, code: 500, respuesta: null });
    }

})



module.exports= secureRouter;