export class ProjectDto {
    constructor({ userId,projectId, title, shortDescription, description, price }) {
        this.userId = userId
        this.title = title
        this.shortDescription = shortDescription
        this.description = description
        this.price = price
        this.projectId = projectId
    }
}