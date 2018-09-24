export let CONFIG = {
    Settings: {
      aadTenant : 'shekarmindtree.onmicrosoft.com',
      spaClientId : 'ee3e56f1-32fd-4d13-acbc-263c4fa3a748', // AAD app client id for this app
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/',
      serviceClientId : 'd1cb9241-6542-4627-a9fc-2958c0bfc6af', // AAD app client id for the service API app
      serviceUrl : 'https://hgvserviceauth.azurewebsites.net/api/values' // the service API endpoint
      // serviceUrl : 'https://localhost:44381/api/values'
    }
  };
