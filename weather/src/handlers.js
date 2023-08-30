const setInputCity=(event,dispatchAction)=>{
    const inputCity=event.target.value;
    inputCity===''?
    dispatchAction({
        type:'EMPTY'
    }):
    dispatchAction({
        type:'TYPING',
        currentCity:inputCity,
    });
}

const chosenCity=(event, dispatchAction)=>{
    const parent=event.target.closest('[cityitem]');
    if(parent){
        dispatchAction({
            type:'COMPLETED',
            completedCity:parent.attributes.cityitem.value,
            lat:parent.attributes.lat.value,
            lon:parent.attributes.lon.value
        });
    }
}

const listTraversal=(event,cityInfo,dispatchAction)=>{
    const nextItem=event.target.nextElementSibling;
    const prevItem=event.target.previousElementSibling;
    event.preventDefault();
    if(nextItem && event.code==='ArrowDown'){
        nextItem.focus();
    }else if(prevItem && event.code==='ArrowUp'){
        prevItem.focus();
    }else if(event.code==='ArrowUp'){
        const searchInput=event.target.parentElement.previousElementSibling;
        searchInput.focus();
        searchInput.setSelectionRange(0,cityInfo.name.length);
    }else if(event.code==='Enter'){
        const parent=event.target.closest('[cityitem]');
        if(parent){
            dispatchAction({
                type:'COMPLETED',
                completedCity:parent.attributes.cityitem.value,
                lat:parent.attributes.lat.value,
                lon:parent.attributes.lon.value
            });
        }
    }
}

const inputEvents=(event, cityInfo, retrievecity, dispatchAction)=>{
    if(event.code==='ArrowDown'){
        event.preventDefault();
        if(cityInfo.suggestions){
            const listItems=document.querySelectorAll('li');
            listItems[0].focus();
        }
    }else if(event.code==='Enter'){
        dispatchAction({
            type:'COMPLETED',
            completedCity:event.target.value,
            lat:-1,
            lon:-1
        });
        retrievecity(cityInfo);
    }
}

const findLocation=(cityInfo, retrievecity, dispatchAction)=>{
    dispatchAction({
        type:'COMPLETED',
        click:true
    });
    retrievecity(cityInfo);
}

export const searchHandlers={
    currentInputCity: setInputCity,
    city:chosenCity,
    listEvents:listTraversal,
    inputEvents: inputEvents,
    location:findLocation
}
