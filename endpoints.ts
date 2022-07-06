interface Endpoints {
login: string;
changePassword: string;
issues: string
refresh: string;
report: string;
profile: string;
agencies: string
backup: string;
edit: string;
}

const endpoints :Endpoints = {
login: "account/users/auth/",
changePassword: "/account/users/reset_password/",
issues: "/messages/assigned/",
refresh: "/account/users/auth/refresh/",
report: "/messages/assigned/",
profile: "/account/users/profile/",
agencies:"/agencies/",
backup: "/request-backups/",
edit: "/account/users/profile/"
// arrive: "/messages/assigned/",
// respond: "/messages/assigned/"

}

export default endpoints