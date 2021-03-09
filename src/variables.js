import { isBool, isNumber, isString, isDeclaration, cleanString } from "./utils/helpers.js"
import { NUMBER, STRING, BOOLEAN } from "./utils/tokenTypes.js"

 // Declarations AST Generators
 const VariableDeclaration = () => ({
     type: "VariableDeclaration",
     declarations: [],
     kind: "const",
 })
 
 const VariableDeclarator = (token, type) => ({
     type: "VariableDeclarator",
     id: {
         type: "Identifier",
         name: token,
     },
     init: {
         type,
         value: null,
     },
 })

function parseVar(tokens) {
    if (isDeclaration(tokens)) {
        let value = tokens[tokens.length - 1]
        let type

        if (isString(value)) {
            type = STRING
            value = cleanString(value)
        }

        if (isNumber(value)) {
            type = NUMBER
        }

        if (isBool(value)) {
            type = BOOLEAN
        }
        
        let transformedVarArray = []
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] !== '') {
                transformedVarArray.push(tokens[i])
            }
        }

        const declaration = VariableDeclaration()
        const declarator = VariableDeclarator(transformedVarArray[1], type)

        declarator.init.value = value
        declaration.declarations = [declarator]

        return declaration
    }
}

export default parseVar