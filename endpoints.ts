interface Endpoints {
login: string;
changePassword: string;
issues: string
refresh: string;
report: string;
// arrive: string;
// respond: string
}

const endpoints :Endpoints = {
login: "account/users/auth/",
changePassword: "/account/users/reset_password/",
issues: "/messages/assigned/",
refresh: "/account/users/auth/refresh/",
report: "/messages/assigned/",
// arrive: "/messages/assigned/",
// respond: "/messages/assigned/"

}

export default endpoints