const pageBaseURL = 'https://nnirbhay.github.io/debug-lens/'

navigateToPage()
function navigateToPage(){
    let params = new URLSearchParams(document.location.search);
    let docId = params.get('docId');
    
    switch (docId) {
        case 'privacy-policy':
            window.location = pageBaseURL+'privacy-policy'
            break;
    
        default:
            break;
    }
}