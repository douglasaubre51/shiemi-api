export class ProjectDto {
    constructor({ userId, title, shortDescription, description, price }) {
        this.userId = userId
        this.title = title
        this.shortDescription = shortDescription
        this.description = description
        this.price = price
    }
}