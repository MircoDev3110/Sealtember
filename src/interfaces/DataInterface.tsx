export interface IPromptData {
    position: number,
    name: string,
    description: string,
    coverUrl: string,
    coverName: string,
    sources: IPromptResource[]
}

export interface IPromptResource {
    label: string,
    hyperlink: string
}

