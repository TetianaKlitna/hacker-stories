class Article {
    constructor(objectID, title, url, author, numComments, points){
         this.objectID = objectID;
         this.title = title;
         this.url = url;
         this.author = author;
         this.numComments = numComments;
         this.points = points;
    }

    getObjectId(){
        return this.objectID;
    }

    getTitle(){
        return this.title;
    }

    getUrl(){
        return this.url;
    }

    getAuthor(){
        return this.author;
    }

    getNumComments(){
        return this.getNumComments;
    }

    getPoints(){
        return this.points;
    }
}



export default Article;