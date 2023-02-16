
export const FMT_ROOT = "http://192.168.1.25:8080"
export const FMT_API = FMT_ROOT + "/api"
export const FMT_V1_ROOT = FMT_API + "/v1"

export const FIND_TIME_ENDPOINT = FMT_V1_ROOT + "/findtime"

export const TASKS_ENDPOINT = FMT_V1_ROOT + "/task"
export const CREATE_TASKS_ENDPOINT = TASKS_ENDPOINT + "/create"
export const GET_ALL_TASKS_ENDPOINT = TASKS_ENDPOINT + "/all"

export const GOALS_ENDPOINT = FMT_V1_ROOT + "/goal"
export const CREATE_GOALS_ENDPOINT = GOALS_ENDPOINT + "/create"

export const CREATE_TAG_ENDPOINT = FMT_V1_ROOT + "/tags"
export const GET_ALL_TAGS_ENPOINT = FMT_V1_ROOT + "/tags"

export const GET_LOVELY_QUOTE_ENDPOINT = "https://zenquotes.io/api/today"
