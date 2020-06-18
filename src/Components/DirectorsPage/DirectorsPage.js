import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addDirectorAC, setDirectorAC, updateDirectorAC} from "../../store/directors-reducer";
import {GET_DIRECTORS} from "../../API/queries/directors_queries";
import {useQuery} from "@apollo/react-hooks";
import DirectorsTable from "./DirectorsTable/DirectorsTable";
import {AddDirector} from "./AddDirector/AddDirector";
let DirectorsPage = (props) => {
    const { loading, error, data, refetch } = useQuery(GET_DIRECTORS);

    if(error) {
        return <span>Error</span>
    }
    if(loading) {
        return <span>Loading</span>
    } else {
        return (
            <div>
                DirectorsPage
                <DirectorsTable refetch={refetch} directors={data.directors}/>
                <AddDirector refetch={refetch}/>
            </div>
        )
    }
}

export default DirectorsPage;
