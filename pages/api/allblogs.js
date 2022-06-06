// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../middleware/dbConfig"

const  handler = async (req, res) => {
    // console.log("http://"+req.rawHeaders[1]+req.url)
    const current_url = new URL("http://"+req.rawHeaders[1]+req.url)
    const search_params = current_url.searchParams;
    var sql = `SELECT * FROM ${'blogs'} WHERE 1`
    const l_id = search_params.get('l_id');
    // console.log(search_params)
    // sql += ` AND ${'id'}='${l_id}'`
    conn.query(sql, function(err, result){
        if(err){
            res.status(404).json({ "error": "Some Internal Server Error" })
            throw err;
        } 
        else{
            res.status(200).json({ result })
            // console.log(result)
        }
    })
    // if(category != ""){
    //     var products = await Product.find({"category" :category })
    // }
    // else{
    //     var products = await Product.find()
    
    // let products = await Product.find()
    
}
export default handler