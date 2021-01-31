export const url2 (post) =>{
    return post.opportunities.toString().replace(',','%20and%20skill%2Frole%3A')+'%29';
}