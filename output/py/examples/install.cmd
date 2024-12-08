python -m venv .venv
call .venv\Scripts\activate
pip install build
python -m build --outdir dist ..\
pip install dist\swagger_petstore_open_api_3_0-1.0.0-py3-none-any.whl --force-reinstall
