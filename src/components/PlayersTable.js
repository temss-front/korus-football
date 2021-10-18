import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

function PlayersTable() {
    const [data, setData] = useState(null);
    const [players, setPlayers] = useState(null);
    useEffect(() => {
	   fetch('https://sheet.best/api/sheets/cd513674-dade-4148-a42d-46892bdb7f60').then(r => r.json().then(data => setData(data)))
    }, []);
    useEffect(() => {
	   console.log(data)
	   data && setPlayers(data.slice(1, data.length - 1))
    }, [data])

    if (players) {
	   return (<><Typography align='center' variant="overline" display="block" gutterBottom>
			   Всего собралось {data[data.length-1][1]}
		    </Typography>
			   <TableContainer align = 'center' component = {Paper}>
				  <Table sx = {{width: '60%'}} size = "medium" aria-label = "a dense table">
					 <TableHead>
						<TableRow>
						    <TableCell>Игрок</TableCell>
						    <TableCell align = "center">Отметка</TableCell>
						</TableRow>
					 </TableHead>
					 <TableBody>
						{players.map((player, idx) => (<TableRow
							 key = {idx}
							 sx = {{'&:last-child td, &:last-child th': {border: 0}}}
						>
						    <TableCell component = "th" scope = "row">
							   {player[0]}
						    </TableCell>
						    <TableCell align = "center">{player[2]}</TableCell>
						</TableRow>))}
					 </TableBody>
				  </Table>
			   </TableContainer>
		    </>)
    }
    return <></>


}

export default PlayersTable;
