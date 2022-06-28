interface Endpoints {
login: string;
changePassword: string;
issues: string
refresh: string;
}

const endpoints :Endpoints = {
login: "account/users/auth/",
changePassword: "/account/users/reset_password/",
issues: "/messages/assigned/",
refresh: "/account/users/auth/refresh/"
}

export default endpoints