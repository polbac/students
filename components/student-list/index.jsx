
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link'
import useLocale from '../../hooks/locale'
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FetchError from '../fetch-error'
import { fetchList } from '../../store/actions'
import { selectList } from '../../selectors/students'
import { isLoading } from '../../selectors/loader'
import { selectMainError } from '../../selectors/error'
import StudentsListFilter from './filter'
import {ThemeContext } from '../../context/theme'

function StudentList({ children }) {
    const { list } = useLocale()
    const dispatch = useDispatch()
    const students = useSelector(selectList)
    const loading = useSelector(isLoading)
    const mainError = useSelector(selectMainError)
    const [mainLoader, setMainLoader] = useState(true)
    const { texts } = useContext(ThemeContext)
    
    useEffect(() => {
        dispatch(fetchList())
    }, [])

    if (!loading && mainLoader) {
        setMainLoader(false)
    }
    
    if (mainLoader) {
        return <React.Fragment />
    }
    
    if (mainError) {
        return <FetchError />
    }

    return (
        <Container maxWidth="md" className='container'>
            <Grid md="12">
            <h2 style={{ fontSize: texts.sizeTitle2}}>{list.title}</h2>
            </Grid>
            <Grid>
                <StudentsListFilter />
            </Grid>
            <Grid md="12">
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>{list.name}</TableCell>
                                <TableCell>{list.email}</TableCell>
                                <TableCell>{list.career}</TableCell>
                                <TableCell>{list.country}</TableCell>
                                <TableCell>
                                
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                            {students.map(student => (
                                <TableRow >
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                    <TableCell>{student.career.name}</TableCell>
                                    <TableCell>{student.country.name}</TableCell>
                                    <TableCell>
                                    <Link href="/dashboard/[id]" as={`dashboard/${student.id}`}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            startIcon={<EditIcon />}
                                        >
                                        <a>{list.edit}</a>
                                        </Button>
                                    </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Grid>
            <style jsx>{`
                h2{
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
            `}</style>
        </Container>
    )
}

export default StudentList