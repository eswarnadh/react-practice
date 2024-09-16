

#parcel :
- Dev build
- local server
- HMR:(Hot Module Replacement)
- File watching algorithm
- Parcel uses caching and cache things for our project for faster build
- Remove-Item -Recurse -Force .parcel-cache => (command used to remove the cache of the parcel)
- Image optimization
- Bundle all the things,Compress the files 
- minification : Parcel uses SWC(speedy web compiler) to perform minification. swc is a rust based platform which 20x faster than babel on single thread 
- Tree Shaking (Removing the dead code and unused code )


# Redux toolkit
- Redux uses the immer library which is used to mutate the state behind the scenes we as a developers dont need to take care of mutating the state like in vannila redux


# Testing (developer can perform):

- Unit Testing
- Integration Testing
- e2e testing End-End Testing (needs external tools like seleium...etc )

react test library built on top of DOM testing library used to write the testcases in the react aplication. this uses jest testing library

# setting up testing env
1 install react-testing lib
2 install jest 
3 install babel dependencies
4 configure babel (babel.config.js) in root level
5 configure parcel config file to disable the babel transpilation 
6 jest configuration by command npx jest --init
7 install jsdom