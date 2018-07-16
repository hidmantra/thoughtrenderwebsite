export class GalleryStripModal
{
    constructor()
    {
        console.log('GSM class built');
    }

    public getComponentHTML():string
    {
        let strip:string = "<p>hello</p><h1>gurl</h1>";
        
        return strip;
    }

    public getModalHTML():string
    {
        let modalHTML:string ="<div class='modal fade' id='myModal'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>Modal Heading</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div id='#test' class='modal-body'></div><div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button></div></div></div>";

        return modalHTML;
    }
}


