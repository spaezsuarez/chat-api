const createMessage = (user,message) => {
    return new Promise((resolve,reject) => {
        if(!user || !message){
            console.error('[messageController]: No hay usuario o mensaje');
            return reject({error: 'Asegurese que los datos sean correctos'});
        }
        const data = {
            user: user,
            message: message,
            date: new Date()
        }
        console.log('[messageController]: Mensaje Creado exitosamente: ' + JSON.stringify(data));
        return resolve({data: data,message: 'mensaje creado exitosamente'});
    });
}

export default { createMessage };