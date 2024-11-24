import type { ComponentPublicInstance, VueConstructor } from "vue";

export interface Panel {
  create: (arg1?: any) => any;
  context: string;
  debug: boolean;
  deprecated: (arg1?: any) => any;
  direction: string;
  error: (arg1?: any, arg2?: any) => any;
  get: (arg1?: any, arg2?: any) => Promise<any>;
  open: (arg1?: any, arg2?: any) => Promise<any>;
  overlays: (...args: any[]) => any;
  post: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  request: (...args: any[]) => Promise<any>;
  search: (...args: any[]) => Promise<any>;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  title: string;
  url: (arg1?: any, arg2?: any, arg3?: any) => any;
  isLoading: boolean;
  isOffline: boolean;
  activation: PanelActivation;
  drag: PanelDrag;
  events: PanelEvents;
  searcher: PanelSearcher;
  upload: PanelUpload;
  language: PanelLanguage;
  menu: PanelMenu;
  notification: PanelNotification;
  system: PanelSystem;
  translation: PanelTranslation;
  user: PanelUser;
  dropdown: PanelDropdown;
  view: PanelView;
  drawer: PanelDrawer;
  dialog: PanelDialog;
  redirect: (...args: any[]) => any;
  reload: (...args: any[]) => Promise<any>;
  t: (...args: any[]) => any;
  plugins: PanelPlugins;
  config: PanelConfig;
  languages: {
    code: string;
    default: boolean;
    direction: string;
    name: string;
    rules: Record<string, string>;
  }[];
  license: string;
  multilang: boolean;
  permissions: PanelPermissions;
  searches: PanelSearches;
  urls: PanelUrls;
  api: PanelApi;
  app: InstanceType<VueConstructor>;
  plugin: (...args: any[]) => any;
}
export interface PanelActivation {
  close: (...args: any[]) => any;
  isOpen: boolean;
  open: (...args: any[]) => any;
}
export interface PanelDrag {
  type: any;
  data: PanelDragData;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  isDragging: boolean;
  start: (arg1?: any, arg2?: any) => any;
  stop: (...args: any[]) => any;
}
export type PanelDragData = Record<string, any>;
export interface PanelEvents {
  blur: (arg1?: any) => any;
  click: (arg1?: any) => any;
  copy: (arg1?: any) => any;
  dragenter: (arg1?: any) => any;
  dragexit: (arg1?: any) => any;
  dragleave: (arg1?: any) => any;
  dragover: (arg1?: any) => any;
  drop: (arg1?: any) => any;
  emit: (arg1?: any, arg2?: any) => any;
  entered: any;
  focus: (arg1?: any) => any;
  keychain: (arg1?: any, arg2?: any) => any;
  keydown: (arg1?: any) => any;
  keyup: (arg1?: any) => any;
  off: (arg1?: any, arg2?: any) => any;
  offline: (arg1?: any) => any;
  on: (arg1?: any, arg2?: any) => any;
  online: (arg1?: any) => any;
  paste: (arg1?: any) => any;
  popstate: (arg1?: any) => any;
  prevent: (arg1?: any) => any;
  subscribe: (...args: any[]) => any;
  unsubscribe: (...args: any[]) => any;
  $on: (arg1?: any) => any;
  $emit: (arg1?: any) => any;
  $off: (arg1?: any) => any;
}
export interface PanelSearcher {
  controller: any;
  requests: number;
  isLoading: boolean;
  open: (arg1?: any) => any;
  query: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
}
export interface PanelUpload {
  accept: string;
  attributes: PanelUploadAttributes;
  files: any[];
  max: any;
  multiple: boolean;
  preview: PanelUploadPreview;
  replacing: any;
  url: any;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  addEventListener: (arg1?: any, arg2?: any) => any;
  addEventListeners: (arg1?: any) => any;
  emit: (arg1?: any, arg2?: any) => any;
  hasEventListener: (arg1?: any) => any;
  listeners: (...args: any[]) => any;
  on: PanelUploadOn;
  input: any;
  cancel: (...args: any[]) => any;
  completed: any[];
  done: (...args: any[]) => any;
  findDuplicate: (arg1?: any) => any;
  hasUniqueName: (arg1?: any) => any;
  file: (arg1?: any) => any;
  open: (arg1?: any, arg2?: any) => any;
  pick: (arg1?: any) => any;
  remove: (arg1?: any) => any;
  replace: (arg1?: any, arg2?: any) => any;
  select: (arg1?: any, arg2?: any) => any;
  submit: (...args: any[]) => Promise<any>;
  upload: (arg1?: any, arg2?: any) => Promise<any>;
}
export type PanelUploadAttributes = Record<string, any>;
export type PanelUploadPreview = Record<string, any>;
export type PanelUploadOn = Record<string, any>;
export interface PanelLanguage {
  code: string;
  default: boolean;
  direction: string;
  name: string;
  rules: Record<string, string>;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  isDefault: boolean;
}
export interface PanelMenu {
  entries: (
    | { current: boolean; icon: string; link: string; text: string }
    | string
  )[];
  hover: boolean;
  isOpen: boolean;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  blur: (arg1?: any) => any;
  close: (...args: any[]) => any;
  escape: (...args: any[]) => any;
  open: (...args: any[]) => any;
  resize: (...args: any[]) => any;
  toggle: (...args: any[]) => any;
}
export interface PanelNotification {
  context: any;
  details: any;
  icon: any;
  isOpen: boolean;
  message: any;
  theme: any;
  timeout: any;
  type: any;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  close: (...args: any[]) => any;
  deprecated: (arg1?: any) => any;
  error: (arg1?: any) => any;
  info: (arg1?: any) => any;
  isFatal: boolean;
  fatal: (arg1?: any) => any;
  open: (arg1?: any) => any;
  success: (arg1?: any) => any;
  timer: PanelNotificationTimer;
}
export interface PanelNotificationTimer {
  interval: any;
  start: (arg1?: any, arg2?: any) => any;
  stop: (...args: any[]) => any;
}
export interface PanelSystem {
  ascii: Record<string, string>;
  csrf: string;
  isLocal: boolean;
  locales: PanelSystemLocales;
  slugs: Record<string, string>;
  title: string;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
}
export interface PanelSystemLocales {
  bg: string;
  ca: string;
  cs: string;
  da: string;
  de: string;
  el: string;
  en: string;
  eo: string;
  es_419: string;
  es_ES: string;
  fa: string;
  fi: string;
  fr: string;
  hu: string;
  id: string;
  is_IS: string;
  it: string;
  ko: string;
  lt: string;
  nb: string;
  nl: string;
  pl: string;
  pt_BR: string;
  pt_PT: string;
  ro: string;
  ru: string;
  sk: string;
  sv_SE: string;
  tr: string;
}
export interface PanelTranslation {
  code: string;
  data: Record<string, string>;
  direction: string;
  name: string;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  translate: (arg1?: any, arg2?: any, arg3?: any) => any;
}
export interface PanelUser {
  email: string;
  id: string;
  language: string;
  role: string;
  username: string;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
}
export interface PanelDropdown {
  component: any;
  isLoading: boolean;
  on: PanelDropdownOn;
  path: any;
  props: PanelDropdownProps;
  query: PanelDropdownQuery;
  referrer: any;
  timestamp: any;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  addEventListener: (arg1?: any, arg2?: any) => any;
  addEventListeners: (arg1?: any) => any;
  emit: (arg1?: any, arg2?: any) => any;
  hasEventListener: (arg1?: any) => any;
  listeners: (...args: any[]) => any;
  load: (arg1?: any, arg2?: any) => Promise<any>;
  open: (arg1?: any, arg2?: any) => any;
  post: (arg1?: any, arg2?: any) => Promise<any>;
  refresh: (arg1?: any) => Promise<any>;
  reload: (arg1?: any) => Promise<any>;
  url: (...args: any[]) => any;
  close: (...args: any[]) => any;
  openAsync: (arg1?: any, arg2?: any) => any;
  options: (...args: any[]) => any;
}
export type PanelDropdownOn = Record<string, any>;
export type PanelDropdownProps = Record<string, any>;
export type PanelDropdownQuery = Record<string, any>;
export interface PanelView {
  component: string;
  isLoading: boolean;
  on: PanelViewOn;
  path: string;
  props: PanelViewProps;
  query: any[];
  referrer: string;
  timestamp: number;
  breadcrumb: { label: string; link: string }[];
  breadcrumbLabel: string;
  icon: string;
  id: string;
  link: string;
  search: string;
  title: string;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  addEventListener: (arg1?: any, arg2?: any) => any;
  addEventListeners: (arg1?: any) => any;
  emit: (arg1?: any, arg2?: any) => any;
  hasEventListener: (arg1?: any) => any;
  listeners: (...args: any[]) => any;
  load: (arg1?: any, arg2?: any) => Promise<any>;
  open: (arg1?: any, arg2?: any) => Promise<any>;
  post: (arg1?: any, arg2?: any) => Promise<any>;
  refresh: (arg1?: any) => Promise<any>;
  reload: (arg1?: any) => Promise<any>;
  url: (...args: any[]) => any;
  submit: (...args: any[]) => Promise<any>;
}
export type PanelViewOn = Record<string, any>;
export interface PanelViewProps {
  lock: PanelViewPropsLock;
  permissions: PanelViewPropsPermissions;
  tabs: Record<string, any>[];
  tab: PanelViewPropsTab;
  next: PanelViewPropsNext;
  prev: PanelViewPropsPrev;
  blueprint: string;
  model: PanelViewPropsModel;
  status: PanelViewPropsStatus;
}
export interface PanelViewPropsLock {
  state: any;
  data: boolean;
}
export interface PanelViewPropsPermissions {
  access: boolean;
  changeSlug: boolean;
  changeStatus: boolean;
  changeTemplate: boolean;
  changeTitle: boolean;
  create: boolean;
  delete: boolean;
  duplicate: boolean;
  list: boolean;
  move: boolean;
  preview: boolean;
  read: boolean;
  sort: boolean;
  update: boolean;
}
export interface PanelViewPropsTab {
  label: string;
  icon: string;
  columns: Record<string, any>[];
  link: string;
  name: string;
}
export interface PanelViewPropsNext {
  link: string;
  title: string;
}
export interface PanelViewPropsPrev {
  link: string;
  title: string;
}
export interface PanelViewPropsModel {
  content: Record<string, any>;
  id: string;
  link: string;
  parent: string;
  previewUrl: string;
  status: string;
  title: string;
  uuid: string;
}
export interface PanelViewPropsStatus {
  label: string;
  text: string;
}
export interface PanelDrawer {
  component: any;
  isLoading: boolean;
  on: PanelDrawerOn;
  path: any;
  props: PanelDrawerProps;
  query: PanelDrawerQuery;
  referrer: any;
  timestamp: any;
  id: any;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  addEventListener: (arg1?: any, arg2?: any) => any;
  addEventListeners: (arg1?: any) => any;
  emit: (arg1?: any, arg2?: any) => any;
  hasEventListener: (arg1?: any) => any;
  listeners: (...args: any[]) => any;
  load: (arg1?: any, arg2?: any) => Promise<any>;
  open: (arg1?: any, arg2?: any) => Promise<any>;
  post: (arg1?: any, arg2?: any) => Promise<any>;
  refresh: (arg1?: any) => Promise<any>;
  reload: (arg1?: any) => Promise<any>;
  url: (...args: any[]) => any;
  cancel: (...args: any[]) => Promise<any>;
  close: (arg1?: any) => Promise<any>;
  focus: (arg1?: any) => any;
  input: (arg1?: any) => any;
  isOpen: boolean;
  submit: (arg1?: any, arg2?: any) => Promise<any>;
  success: (arg1?: any) => any;
  successDispatch: (arg1?: any) => any;
  successEvents: (arg1?: any) => any;
  successNotification: (arg1?: any) => any;
  successRedirect: (arg1?: any) => any;
  value?: any;
  breadcrumb: any[];
  goTo: (arg1?: any) => any;
  history: PanelDrawerHistory;
  icon: string;
  tab: (arg1?: any) => any;
}
export type PanelDrawerOn = Record<string, any>;
export type PanelDrawerProps = Record<string, any>;
export type PanelDrawerQuery = Record<string, any>;
export interface PanelDrawerHistory {
  add: (arg1?: any) => any;
  at: (arg1?: any) => any;
  clear: (...args: any[]) => any;
  get: (arg1?: any) => any;
  goto: (arg1?: any) => any;
  has: (arg1?: any) => any;
  index: (arg1?: any) => any;
  isEmpty: (...args: any[]) => any;
  last: (...args: any[]) => any;
  milestones: any[];
  remove: (arg1?: any) => any;
  removeLast: (...args: any[]) => any;
  replace: (arg1?: any, arg2?: any) => any;
}
export interface PanelDialog {
  component: any;
  isLoading: boolean;
  on: PanelDialogOn;
  path: any;
  props: PanelDialogProps;
  query: PanelDialogQuery;
  referrer: any;
  timestamp: any;
  legacy: boolean;
  ref: any;
  key: (...args: any[]) => any;
  defaults: (...args: any[]) => any;
  reset: (...args: any[]) => any;
  set: (arg1?: any) => any;
  state: (...args: any[]) => any;
  validateState: (arg1?: any) => any;
  addEventListener: (arg1?: any, arg2?: any) => any;
  addEventListeners: (arg1?: any) => any;
  emit: (arg1?: any, arg2?: any) => any;
  hasEventListener: (arg1?: any) => any;
  listeners: (...args: any[]) => any;
  load: (arg1?: any, arg2?: any) => Promise<any>;
  open: (arg1?: any, arg2?: any) => Promise<any>;
  post: (arg1?: any, arg2?: any) => Promise<any>;
  refresh: (arg1?: any) => Promise<any>;
  reload: (arg1?: any) => Promise<any>;
  url: (...args: any[]) => any;
  cancel: (...args: any[]) => Promise<any>;
  close: (...args: any[]) => Promise<any>;
  focus: (arg1?: any) => any;
  input: (arg1?: any) => any;
  isOpen: boolean;
  submit: (arg1?: any, arg2?: any) => Promise<any>;
  success: (arg1?: any) => any;
  successDispatch: (arg1?: any) => any;
  successEvents: (arg1?: any) => any;
  successNotification: (arg1?: any) => any;
  successRedirect: (arg1?: any) => any;
  value?: any;
  openComponent: (arg1?: any) => Promise<any>;
}
export type PanelDialogOn = Record<string, any>;
export type PanelDialogProps = Record<string, any>;
export type PanelDialogQuery = Record<string, any>;
export interface PanelPlugins {
  components: Record<string, ComponentPublicInstance>;
  created: any[];
  icons: Record<string, string>;
  login: any;
  textareaButtons: PanelPluginsTextareaButtons;
  use: any[];
  thirdParty: PanelPluginsThirdParty;
  writerMarks: PanelPluginsWriterMarks;
  writerNodes: PanelPluginsWriterNodes;
  routes: any[];
  views: PanelPluginsViews;
}
export type PanelPluginsTextareaButtons = Record<string, any>;
export type PanelPluginsThirdParty = Record<string, any>;
export type PanelPluginsWriterMarks = Record<string, any>;
export type PanelPluginsWriterNodes = Record<string, any>;
export type PanelPluginsViews = Record<string, any>;
export interface PanelConfig {
  debug: boolean;
  kirbytext: boolean;
  translation: string;
}
export interface PanelPermissions {
  access: PanelPermissionsAccess;
  files: PanelPermissionsFiles;
  languages: PanelPermissionsLanguages;
  pages: PanelPermissionsPages;
  site: PanelPermissionsSite;
  users: PanelPermissionsUsers;
  user: PanelPermissionsUser;
}
export interface PanelPermissionsAccess {
  account: boolean;
  languages: boolean;
  panel: boolean;
  site: boolean;
  system: boolean;
  users: boolean;
}
export interface PanelPermissionsFiles {
  access: boolean;
  changeName: boolean;
  changeTemplate: boolean;
  create: boolean;
  delete: boolean;
  list: boolean;
  read: boolean;
  replace: boolean;
  update: boolean;
}
export interface PanelPermissionsLanguages {
  create: boolean;
  delete: boolean;
  update: boolean;
}
export interface PanelPermissionsPages {
  access: boolean;
  changeSlug: boolean;
  changeStatus: boolean;
  changeTemplate: boolean;
  changeTitle: boolean;
  create: boolean;
  delete: boolean;
  duplicate: boolean;
  list: boolean;
  move: boolean;
  preview: boolean;
  read: boolean;
  sort: boolean;
  update: boolean;
}
export interface PanelPermissionsSite {
  changeTitle: boolean;
  update: boolean;
}
export interface PanelPermissionsUsers {
  changeEmail: boolean;
  changeLanguage: boolean;
  changeName: boolean;
  changePassword: boolean;
  changeRole: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
}
export interface PanelPermissionsUser {
  changeEmail: boolean;
  changeLanguage: boolean;
  changeName: boolean;
  changePassword: boolean;
  changeRole: boolean;
  delete: boolean;
  update: boolean;
}
export interface PanelSearches {
  pages: PanelSearchesPages;
  files: PanelSearchesFiles;
  users: PanelSearchesUsers;
}
export interface PanelSearchesPages {
  icon: string;
  label: string;
  id: string;
}
export interface PanelSearchesFiles {
  icon: string;
  label: string;
  id: string;
}
export interface PanelSearchesUsers {
  icon: string;
  label: string;
  id: string;
}
export interface PanelUrls {
  api: string;
  site: string;
}
export interface PanelApi {
  csrf: string;
  endpoint: string;
  methodOverwrite: boolean;
  ping: number;
  requests: any[];
  running: number;
  request: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  auth: PanelApiAuth;
  delete: (arg1?: any, arg2?: any, arg3?: any, arg4?: any) => Promise<any>;
  files: PanelApiFiles;
  get: (arg1?: any, arg2?: any, arg3?: any, arg4?: any) => Promise<any>;
  languages: PanelApiLanguages;
  pages: PanelApiPages;
  patch: (arg1?: any, arg2?: any, arg3?: any, arg4?: any) => Promise<any>;
  post: (
    arg1?: any,
    arg2?: any,
    arg3?: any,
    arg4?: any,
    arg5?: any,
  ) => Promise<any>;
  roles: PanelApiRoles;
  system: PanelApiSystem;
  site: PanelApiSite;
  translations: PanelApiTranslations;
  users: PanelApiUsers;
  language: string;
}
export interface PanelApiAuth {
  login: (arg1?: any) => Promise<any>;
  logout: (...args: any[]) => Promise<any>;
  ping: (...args: any[]) => Promise<any>;
  user: (arg1?: any, arg2?: any) => Promise<any>;
  verifyCode: (arg1?: any, arg2?: any) => Promise<any>;
}
export interface PanelApiFiles {
  changeName: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  delete: (arg1?: any, arg2?: any) => Promise<any>;
  get: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  id: (arg1?: any) => any;
  link: (arg1?: any, arg2?: any, arg3?: any) => any;
  update: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  url: (arg1?: any, arg2?: any, arg3?: any) => any;
}
export interface PanelApiLanguages {
  create: (arg1?: any, arg2?: any) => Promise<any>;
  delete: (arg1?: any) => Promise<any>;
  get: (arg1?: any) => Promise<any>;
  list: (...args: any[]) => Promise<any>;
  update: (arg1?: any, arg2?: any) => Promise<any>;
}
export interface PanelApiPages {
  blueprint: (arg1?: any) => Promise<any>;
  blueprints: (arg1?: any, arg2?: any) => Promise<any>;
  changeSlug: (arg1?: any, arg2?: any) => Promise<any>;
  changeStatus: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  changeTemplate: (arg1?: any, arg2?: any) => Promise<any>;
  changeTitle: (arg1?: any, arg2?: any) => Promise<any>;
  children: (arg1?: any, arg2?: any) => Promise<any>;
  create: (arg1?: any, arg2?: any) => Promise<any>;
  delete: (arg1?: any, arg2?: any) => Promise<any>;
  duplicate: (arg1?: any, arg2?: any, arg3?: any) => Promise<any>;
  get: (arg1?: any, arg2?: any) => Promise<any>;
  id: (arg1?: any) => any;
  files: (arg1?: any, arg2?: any) => Promise<any>;
  link: (arg1?: any) => any;
  preview: (arg1?: any) => Promise<any>;
  search: (arg1?: any, arg2?: any) => Promise<any>;
  update: (arg1?: any, arg2?: any) => Promise<any>;
  url: (arg1?: any, arg2?: any) => any;
}
export interface PanelApiRoles {
  list: (arg1?: any, arg2?: any) => Promise<any>;
  get: (arg1?: any) => Promise<any>;
}
export interface PanelApiSystem {
  get: (arg1?: any) => Promise<any>;
  install: (arg1?: any, arg2?: any) => Promise<any>;
  register: (arg1?: any, arg2?: any) => Promise<any>;
}
export interface PanelApiSite {
  blueprint: (...args: any[]) => Promise<any>;
  blueprints: (...args: any[]) => Promise<any>;
  changeTitle: (arg1?: any, arg2?: any) => Promise<any>;
  children: (arg1?: any, arg2?: any) => Promise<any>;
  get: (arg1?: any) => Promise<any>;
  update: (arg1?: any, arg2?: any) => Promise<any>;
}
export interface PanelApiTranslations {
  list: (...args: any[]) => Promise<any>;
  get: (arg1?: any) => Promise<any>;
}
export interface PanelApiUsers {
  blueprint: (arg1?: any) => Promise<any>;
  blueprints: (arg1?: any, arg2?: any) => Promise<any>;
  changeEmail: (arg1?: any, arg2?: any) => Promise<any>;
  changeLanguage: (arg1?: any, arg2?: any) => Promise<any>;
  changeName: (arg1?: any, arg2?: any) => Promise<any>;
  changePassword: (arg1?: any, arg2?: any) => Promise<any>;
  changeRole: (arg1?: any, arg2?: any) => Promise<any>;
  create: (arg1?: any, arg2?: any) => Promise<any>;
  delete: (arg1?: any) => Promise<any>;
  deleteAvatar: (arg1?: any) => Promise<any>;
  link: (arg1?: any, arg2?: any) => any;
  list: (arg1?: any) => Promise<any>;
  get: (arg1?: any, arg2?: any) => Promise<any>;
  roles: (arg1?: any) => Promise<any>;
  search: (arg1?: any, arg2?: any) => Promise<any>;
  update: (arg1?: any, arg2?: any) => Promise<any>;
  url: (arg1?: any, arg2?: any) => any;
}
