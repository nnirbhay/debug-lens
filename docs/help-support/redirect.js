const pageBaseURL = 'https://nnirbhay.github.io/debug-lens/'

navigateToPage()
function navigateToPage(){
    let params = new URLSearchParams(document.location.search);
    let docId = params.get('docId');
    
    switch (docId) {
        case 'privacy-policy':
            window.location = pageBaseURL+'privacy-policy'
            break;

        case 'raise-bug':
            window.location = pageBaseURL+'raise-support-ticket'
            break;

        case 'drop-suggestion':
            window.location = pageBaseURL+'raise-support-ticket'
            break;

        case 'user-guide':
            window.location = pageBaseURL+'user-guide'
            break;
    
        default:
            break;
    }
}