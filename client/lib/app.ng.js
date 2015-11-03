angular.module('meteorLelabApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
  'ngCookies',
  'ngSanitize',
  'ngLocalize',
  'ngLocalize.Config'
])
.value('localeConf', {
    basePath: 'lang',
    defaultLocale: 'en-US',
    sharedDictionary: 'lang',
    fileExtension: '.lang.json',
    persistSelection: true,
    cookieName: 'COOKIE_LOCALE_LANG',
    observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
    delimiter: '::'
})
.value('localeSupported', [
    'en-US',
    'fr-FR',
])
.value('localeFallbacks', {
    'en': 'en-US',
    'fr': 'fr-FR'
});

onReady = function() {
  angular.bootstrap(document, ['meteorLelabApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}