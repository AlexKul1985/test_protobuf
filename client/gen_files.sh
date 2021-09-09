PATH_PLUGIN=./node_modules/.bin/protoc-gen-ts

protoc \
    --plugin=protoc-gen-ts=${PATH_PLUGIN} \
    --js_out=import_style=common.js,binary:./ \
    --ts_out=./ \
    users.proto