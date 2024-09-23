

# parcel :
- Dev build
- local server
- HMR:(Hot Module Replacement)
- File watching algorithm
- Parcel uses caching and cache things for our project for faster build
- Remove-Item -Recurse -Force .parcel-cache => (command used to remove the cache of the parcel)
- Image optimization
- Bundle all the things,Compress the files 
- minification : Parcel by default uses SWC(speedy web compiler) to perform minification. swc is a rust based platform which 20x faster than babel on single thread 
- Tree Shaking (Removing the dead code and unused code ) => Parcel statastically analyses the imports and exports of the each module and removes the unused code. It works with both the static and Dynamic imports.  
- parcel concatenates all the modules into single scope rather than wraping up the every single module. This is called "Scope Hoisting".


# Redux toolkit
- Redux uses the immer library which is used to mutate the state behind the scenes, we as a developers dont need to take care of mutating the state like in vannila redux


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
8 install @babel/preset-react library to make jsx work in testcases
9 include @babel/preset-react into the babel config file which we are created previously in the root level
10 istall @testing-library/jest-dom