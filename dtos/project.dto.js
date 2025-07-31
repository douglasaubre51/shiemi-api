export class ProjectDto {
    constructor({ userId, title, shortDescription, Description, price }) {
        this.userId = userId
        this.title = title
        this.shortDescription = shortDescription
        this.Description = Description
        this.price = price
    }
}