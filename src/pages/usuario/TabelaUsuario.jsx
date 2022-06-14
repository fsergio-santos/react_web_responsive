
import React, { Fragment, useEffect, useMemo, useState } from "react";
import TableHeader from "../../components/table/TableHeader";
import usePageLoader from "../../hooks/PageLoader";
import { WindowTitle, Window, WindowFooter } from "../../components/content/Content";
import Pagination from "../../components/table/Pagination";
import Search from "../../components/table/Search";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SelectNumberPage from "../../components/table/SelectNumberPage";

const headers = [
    {  name: 'Id', field:'id', sortable:true },
    {  name: 'Nome', field:'name', sortable:true },
    {  name: 'E-mail', field:'email', sortable:true },
]



const TabelaUsuario = () => {
   const [comments, setComments] = useState([]); 
   const [loader, showLoader, hideLoader] = usePageLoader(); 
   const [sorting, setSorting] = useState({ field: "", order: "" });
   const [currentPage, setCurrentPage] = useState(1);
   const [totalItems, setTotalItems] = useState(0);
   const [search, setSearch] = useState("");
   const [pageSize, setpageSize] = useState(5)
   const path = "/usuario";

   useEffect(() => {
    const getData = () => {
        showLoader();

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(json => {
                hideLoader();
                setComments(json);
                
            });
        };

      getData();
   }, []);

   const commentsData = useMemo(() => {
        let firstPage = 0;
        let lastPage = 0;
        let computedComments = comments;
        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase())
            );
        }
        setTotalItems(computedComments.length);
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }
        firstPage = (currentPage - 1) * pageSize;
        lastPage =  firstPage + pageSize;
        return computedComments.slice(firstPage, lastPage );
    }, [comments, currentPage, search, pageSize, sorting]);

    const changePageSize = ( tamanho ) =>{
        setpageSize(Number(tamanho));
    }



   return (
       
       <Fragment>
           <WindowTitle/> 
           <div className="row">
               <div className="col-md-12">
                    <Window>
                       <div className="row">
                            <div className="col-md-6">
                                <SelectNumberPage 
                                    tamanhoPagina={pageSize}
                                    changePageSize={(tamanho)=> changePageSize(tamanho)} />
                            </div>    
                            <div className="col-md-6">
                                <Search onSearch={value => {
                                        setSearch(value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                       </div>
                       <div id="no-more-tables">
                        <table  className="table table-striped table-hover table-bordered cf">
                            <TableHeader headers={headers}
                                        onSorting={ (field, order) => setSorting( { field, order } )} />
                            <tbody>
                                {commentsData.map(comment => (
                                    <tr  key={comment.id}>
                                        <td data-title="Id">{comment.id}</td>
                                        <td data-title="Nome">{comment.name}</td>
                                        <td data-title="E-mail">{comment.email}</td>
                                        <td style={{textAlign:"center"}} data-title="Ações">
                                            <Link className="btn btn-info btn-sm"
                                                title="Alterar Registro "
                                                to={`${path}/alterar/${comment.Id}`}>
                                                <i><FaIcons.FaPencilAlt/></i>
                                            </Link>
                                            <Link className="btn btn-danger btn-sm"
                                                title="Excluir Registro "
                                                to={`${path}/excluir/${comment.Id}`}>
                                                <i><FaIcons.FaTrashAlt/></i>
                                            </Link>
                                            <Link className="btn btn-secondary btn-sm"
                                                title="Consultar Registro "
                                                to={`${path}/consultar/${comment.Id}`}>
                                                <i><FaIcons.FaSearchMinus/></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>            
                        </table>
                        </div> 
                        <Pagination 
                          currentPage={currentPage}
                          totalCount={comments.length}
                          pageSize={pageSize}
                          onPageChange={(page) => setCurrentPage(page)}
                        />  
                        {loader}
                        <WindowFooter/>
                        <Link to={`${path}/inserir`}
                            className="btn btn-primary fontSize"
                            title="Incluir novos Registros">
                            Incluir Dados
                            <i className="fontIcon"><FaIcons.FaUserPlus/></i>
                        </Link> 
                    </Window>
                    
                </div>
           </div> 
       </Fragment>
   )
}


export default TabelaUsuario;