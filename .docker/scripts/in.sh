#!/usr/bin/env bash
source $(dirname "$0")/_vars.sh

ASK=$BLUE_COLOR"Escolha uma opção: "$RESET_COLOR
EXIT="exit"
PS3=$ASK

options=(`docker container ls --format "{{.Names}}"`)
select opt in "${options[@]}" $EXIT
do
    if [[ $opt == $EXIT || $REPLY == 'exit' ]]; then
        break;
    fi

    for item in "${options[@]}"; do
        if [[ $item == $opt ]]; then
            echo $YELLOW_COLOR"Entrando em $opt..."$RESET_COLOR
            if docker exec $opt bash -c "exit" &> /dev/null; then
                docker exec -it $opt bash
            else
                docker exec -it $opt sh
            fi
            break 2;
        fi
    done
done
