function dispatchEvent(ws, event) {
    const json = JSON.parse(event);
    switch (json.event) {
        case 'attack': {
            if (!json.id) {
                ws.send('Uncorrected data');
            } else {
                ws.send(`Applying attack ${json.id} user`);
            }
            break;
        }
        case 'apply-ability': {
            if (!json.id) {
                ws.send('Uncorrected data');
            } else {
                ws.send(`Applying ability ${json.id} user`);
            }
            break;
        }
        case 'reincarnation': {
            if (!json.id) {
                ws.send('Uncorrected data');
            } else {
                ws.send(`Reincarnation ${json.id} user`);
            }
            break;
        }
        case 'message': {
            if (!json.text) {
                ws.send('Uncorrected data');
            } else {
                ws.send(`Sending message: ${json.text}`);
            }
            break;
        }
        default: {
            ws.send('Wrong query');
        }
    }
}

export {dispatchEvent};