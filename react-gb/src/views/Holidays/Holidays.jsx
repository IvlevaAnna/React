import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {dataSelector, errorSelector, loadingSelector} from "../../store/holidays/selectors";
import {getHoliday} from "../../store/holidays/actions";
import {Table, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import * as PropTypes from "prop-types";
import {Loader} from "semantic-ui-react";

function Dimmer(props) {
    return null;
}

Dimmer.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node
};
export const Holidays = () => {
    const dispatch = useDispatch()
    const data = useSelector(dataSelector)
    const isLoading = useSelector(loadingSelector)
    const isError = useSelector(errorSelector)

    useEffect(() => {
        dispatch(getHoliday())
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Local name</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.date}
                                        </TableCell>
                                        <TableCell align="right">{item.localName}</TableCell>
                                        <TableCell align="right">{item.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                )
            }
        </>
    )
}
