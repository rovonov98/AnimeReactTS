import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const inputs = [
  {
    id: 'filter__input-1',
    label: 'Max length',
    eventArg: 'maxLength'
  },
  {
    id: 'filter__input-2',
    label: 'First character',
    eventArg: 'firstChar'
  }
]

const Filter: React.FC = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
    if (e.target.value.length > 0) dispatch({ type: 'ADD_FILTER', payload: { name, value: e.target.value } })
    else dispatch({ type: 'REMOVE_FILTER', payload: name })
  }

  return (
    <form className={ classes.root } noValidate autoComplete="off">
      {
        inputs.map(({ id, label, eventArg }, index) => {
          return <TextField key={ index } id={ id } label={ label } onChange={ (e) => handleChange(e, eventArg) }/>
        })
      }
    </form>
  )
}

export default Filter