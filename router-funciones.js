var crypto = require('./crypto/cryptojs');
var client = require('request');
var funciones = {
    api: {
        get: (param) => {
            return new Promise((resolve,reject)=>{
                client.get(param.url,param.args, (err, httpResponse, body) => {
                    resolve({err:err,httpResponse:httpResponse,body:body});
                })
            })
            
            //funciones.api.hadlerResponse(req);
        },
        post: (param) => {
            return new Promise((resolve,reject)=>{
                console.log({post:{url:param.url,args:param.args}});
                client.post(param.url,param.args, (err, httpResponse, body) => {
                    resolve({err:err,httpResponse:httpResponse,body:body});
                })
            }).catch(err=>{console.log({errorPost:err});})
            
            //funciones.api.hadlerResponse(req);
        },
        delete: (param) => {
            return new Promise((resolve,reject)=>{
                client.delete(param.url,param.args, (err, httpResponse, body) => {
                    resolve({err:err,httpResponse:httpResponse,body:body});
                })
            })
            
            //funciones.api.hadlerResponse(req);
        },
        sendProd: (param) => {

            /**
             * Método acepta como parametros @param req, @param res, @param code, @param respuesta .
             */

            
                param.res.status(param.code).json({
                    respuesta: param.respuesta
                })
          

        }
    }
}

module.exports = funciones;