export let CONFIG = {
    Settings: {
      // BASEAPI: 'https://localhost:44356/api', // .NetCore2.0 WebAPI
      // CLIENT_ID: 'ee3e56f1-32fd-4d13-acbc-263c4fa3a748', // https://apps.dev.microsoft.com’
      // TENANT: 'shekarmindtree.onmicrosoft.com',
      // TENANT_ID: '41814658-1358-4ce7-b93d-bc3fce646e07', // found in Azure->Active Directory->Properties Pane, TennantID = Directory ID
      // AUTHORITY: 'https://login.microsoftonline.com/ee3e56f1-32fd-4d13-acbc-263c4fa3a748',
      // RESPONSE_TYPE: 'id_token',
      // RESPONSE_MODE: 'id_token',
      // STATE: '',
      // MS_GRAPH_URI: 'https://graph.microsoft.com/',
      // REDIRECT_URI : 'http://localhost:4210/',
      // POST_LOGOUT_REDIRECT : 'https://localhost:4210',
      // MSGRAPH_BETA_API: 'https://graph.microsoft.com/beta/',
      // MSGRAPH_v1_API: 'https://graph.microsoft.com/v1.0/',
      // SCOPES: ['People.Read'], // People.Read.All - Requires an Administrator to grant this permission
      // ADMIN_CONSENT: true
      aadTenant : 'shekarmindtree.onmicrosoft.com',
      spaClientId : 'ee3e56f1-32fd-4d13-acbc-263c4fa3a748', // AAD app client id for this app
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/',
      serviceClientId : 'd1cb9241-6542-4627-a9fc-2958c0bfc6af', // AAD app client id for the service API app
      serviceUrl : 'https://hgvserviceauth.azurewebsites.net/api/values' // the service API endpoint
      // serviceUrl : 'https://localhost:44381/api/values'
    }
  };
